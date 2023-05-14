import time
import discord
from discord.ext import commands
import requests
from dotenv import load_dotenv
from PIL import Image
import os
import json

with open('config.json', 'r') as f:
    config = json.load(f)

discord_token = config['token']


load_dotenv()
client = commands.Bot(command_prefix="*", intents=discord.Intents.all())

directory = os.getcwd()
print(directory)

async def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:

        # Define the input and output folder paths
        output_folder = "../../../../Pictures/Midjourney/temp/bot_output"

        # Check if the output folder exists, and create it if necessary
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        with open(f"{directory}/{output_folder}/{filename}", "wb") as f:
            f.write(response.content)
        print(f"Image downloaded: {filename}")


@client.event
async def on_ready():
    print("Bot connected")

@client.event
async def on_message(message):
    for attachment in message.attachments:
        if "Upscaled by" in message.content:
            file_prefix = 'UPSCALED_'
        else:
            file_prefix = ''
        if attachment.filename.lower().endswith((".png", ".jpg", ".jpeg", ".gif")):
            await download_image(attachment.url, f"{file_prefix}{attachment.filename}")

# use Discord message to download images from a channel history, example: "history:50"
    if message.content.startswith("history:"):
        download_qty = int(message.content.split(":")[1])
        channel = message.channel
        async for msg in channel.history(limit=download_qty):
            for attachment in msg.attachments:
                if "Upscaled by" in message.content:
                    file_prefix = 'UPSCALED_'
                else:
                    file_prefix = ''
                if attachment.filename.lower().endswith((".png", ".jpg", ".jpeg", ".gif")):
                    try:
                        await download_image(attachment.url, f"{file_prefix}{attachment.filename}")
                    except:
                        time.sleep(10)
                        continue

client.run(discord_token)