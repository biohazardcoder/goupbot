import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import { Api } from "telegram"; 
import input from "input"; 

const apiId = 21044885; 
const apiHash = "7d5b0aaf45f450ffb9704e0e2d1f698f";
const stringSession = new StringSession(""); 

(async () => {
  console.log("Telegramga ulanmoqda...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Telefon raqamingiz: "),
    password: async () => await input.text("Ikki bosqichli parol (agar yo‘q bo‘lsa enter): "),
    phoneCode: async () => await input.text("SMS kodi: "),
    onError: (err) => console.log(err),
  });

  console.log("✅ Login bo‘ldi");
  console.log("SESSION: ", client.session.save());

  const today = new Date().toISOString().split("T")[0];

  const count = 50; 
  for (let i = 1; i <= count; i++) {
    const chat = await client.invoke(
      new Api.messages.CreateChat({
        users: [], 
        title: `${today} - ${i}`,
      })
    );
    console.log(`✅ Guruh ${i} yaratildi`);
  }
})();
