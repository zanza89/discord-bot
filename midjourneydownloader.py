import os
import json
import discord
import re
from discord.ext import commands
from dotenv import load_dotenv

# Load configuration from file
with open('config.json', 'r') as f:
    config = json.load(f)

# Get Discord token from configuration
discord_token = config['token']

load_dotenv()
client = commands.Bot(command_prefix="*", intents=discord.Intents.all())

user_id = '936929561302675456'

# Directory to save images
output_folder = "Pictures/Midjourney/temp/bot_output"
os.makedirs(output_folder, exist_ok=True)

async def fetch_user_messages(channel, user_id, message_limit=100):
    user_messages = []
    pattern = r'\*\*(.*?)\*\*'  # Regular expression to match text within **
    ignore_pattern = r'<.*>'  # Regular expression to match text within <>

    # Read the file to get the existing messages
    with open(f"{output_folder}/user_{user_id}_messages.txt", 'r') as f:
        existing_messages = [msg for msg in f.read().split('\n') if msg]

    history = channel.history(limit=message_limit)
    async for message in history:
        print(f"Read message from {message.author.id}: {message.content}")
        if message.author.id == user_id:
            matches = re.findall(pattern, message.content, re.DOTALL)
            if matches:
                message_text = matches[0].replace('"', '')  # Remove " characters
                message_text = message_text.split('--')[0]  # Keep only text before --
                # Check for duplicates in existing and new messages and whether the message contains < or >
                if message_text not in existing_messages and message_text not in user_messages and not re.search(ignore_pattern, message_text):
                    user_messages.append(message_text)
                    print(f"Added message: {message_text}")

    print(f"Fetched {len(user_messages)} new messages")


    # Append the new messages to the file
    with open(f"{output_folder}/user_{user_id}_messages.txt", 'a') as f:
        for msg in user_messages:
            f.write(f"{msg}\n")

@client.event
async def on_message(message):
    try:
        if message.content.startswith("messages:"):
            message_limit = int(message.content.split(":")[1])
            await fetch_user_messages(message.channel, user_id, message_limit)

        elif str(message.author.id) == user_id:
            pattern = r'\*\*(.*?)\*\*'  # Regular expression to match text within **
            ignore_pattern = r'<.*>'  # Regular expression to match text within <>

            matches = re.findall(pattern, message.content)
            if matches:
                message_text = matches[0].replace('"', '')  # Remove " characters
                message_text = message_text.split('--')[0]  # Keep only text before --
                message_text_no_space = message_text.replace(' ', '')  # Message text without spaces for duplicate check
                # Check whether the message contains < or >
                if not re.search(ignore_pattern, message_text):
                    # Read the file to check for duplicates
                    with open(f"{output_folder}/user_{user_id}_messages.txt", 'r') as f:
                        existing_messages = f.read().split('\n')
                        existing_messages_no_space = [m.replace(' ', '') for m in existing_messages]  # Remove spaces for duplicate check
                    if message_text_no_space not in existing_messages_no_space:
                        # Store the original file content
                        with open(f"{output_folder}/user_{user_id}_messages.txt", 'r') as f:
                            original_content = f.read()
                        # Write the new message at the beginning of the file, followed by the original content
                        with open(f"{output_folder}/user_{user_id}_messages.txt", 'w') as f:
                            f.write(f"{message_text}\n{original_content}")
    except Exception as e:
        print(f"Error in on_message: {e}")

@client.event
async def on_ready():
    print("Bot connected")
    # Fetch the missed messages from the specific channel and user
    channel = client.get_channel(1109441730765402196)
    if channel:
        print(f"Channel found: {channel.name}")
        await fetch_user_messages(channel, user_id)
    else:
        print("Channel not found")

client.run(discord_token)
