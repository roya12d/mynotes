import sqlite3
from telegram.ext import Updater
from telegram.ext import CommandHandler
from telegram.ext import MessageHandler, Filters
from datetime import datetime



updater = Updater(token='447669803:AAGv_nt81CVZ7ofwPEwNVXvBdzi_Fomnb5E')
dispatcher = updater.dispatcher




def start(bot, update):
    bot.sendMessage(chat_id=update.message.chat_id, text="Welcome to 'Zero to Hero' Bot")
 
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)
