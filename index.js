import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import { Api } from "telegram"; 
import input from "input"; 

const apiId = 21044885; 
const apiHash = "7d5b0aaf45f450ffb9704e0e2d1f698f";
const stringSession = new StringSession("1AgAOMTQ5LjE1NC4xNjcuNDEBuwPnGdgC/Z0ndSsLSuKhcezE0LxW/CUJZpk33eHMfNvAcb6RQhQGYrgGrvH4WDs+gUjsfYt/3FeP8CzsqVlK+5eX9dqWU4OaIocIt9f63PfrcW0MIpYUjl/cX90hY6UHs/G/oZ6YPWmoKLQgDTIFZGDh7uHDteE3gupo3K531OeDClbcwSoKyi3Rhk2v1Zrkkd1Mrwb86nuscwFNfoIV6C6Z4knFcnaCVnH8WpCDiidL/qcKiIuVUG/hQYpP3NeGE5Ez/CdSmoHSdIM8H4xWxlUFvlaFLXyPtDp5dB7+ogksOhPDnufohe3oiEh8DKpo4EiXdgZDGWub6SMrzGzlFR8="); 

// Meniki 1AgAOMTQ5LjE1NC4xNjcuNDEBuwPnGdgC/Z0ndSsLSuKhcezE0LxW/CUJZpk33eHMfNvAcb6RQhQGYrgGrvH4WDs+gUjsfYt/3FeP8CzsqVlK+5eX9dqWU4OaIocIt9f63PfrcW0MIpYUjl/cX90hY6UHs/G/oZ6YPWmoKLQgDTIFZGDh7uHDteE3gupo3K531OeDClbcwSoKyi3Rhk2v1Zrkkd1Mrwb86nuscwFNfoIV6C6Z4knFcnaCVnH8WpCDiidL/qcKiIuVUG/hQYpP3NeGE5Ez/CdSmoHSdIM8H4xWxlUFvlaFLXyPtDp5dB7+ogksOhPDnufohe3oiEh8DKpo4EiXdgZDGWub6SMrzGzlFR8=
// Dedamlarniki 1AgAOMTQ5LjE1NC4xNjcuNDEBu7UgfPOUoObELVhjWmegwSh9X5cFqXwmP9M705teaCuYmYyDlVvYYXEGHcPe1VvIjulsKb4Ktih7j+SIM9cTM5hLK9grpycdqDaE6py9G/VC6OAjrBaZkBMPVhi2bvry3jf67y6+Fk8af18H2B8A4quIhM+IsVhSazaxD4PDj9SoFCDhW4MNlsi0rk0CexU/3ZV6wlb9GxWHgo/Bgji54Zo7bqyiletxPTLaofId3yGY2HwxZqOpIMxcbZKZXUc/iTlAC2S9u9YU0Y7EMMRtSenA0LZR565Rbb1Qo8DBzv3Ly6Oxr3QueHd3Xf67jvXvjUJXnneOfoucs6yC6wTI0RA=

(async () => {
  console.log("Telegramga ulanmoqda...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Telefon raqamingiz: "),
    password: async () => await input.text("Ikki bosqichli parol (agar yo‘q bo‘lsa enter): "),
    phoneCode: async () => await input.text("SMS kodi: "),
    onError: (err) => console.log(`Xatolik: ${err.errorMessage}`),
  });

  console.log("✅ Login bo‘ldi");
  console.log("SESSION: ", client.session.save());
const me = await client.getMe();
console.log("👤 Mening akkauntim:", me.firstName);  
  const today = new Date().toISOString().split("T")[0];

  const count = 1; 
  for (let i = 1; i <= count; i++) {
    const result = await client.invoke(
      new Api.messages.CreateChat({
        users: ["@mrbiohazard"], 
        title: `${i} - ${today} `,
      })
    );

    console.log(`✅ Guruh ${i} yaratildi`);

    const chatObj = result.updates.chats[0];

await client.invoke(
  new Api.messages.SendMessage({
    peer: chatObj,
    message: "Assalomu alaykum",
  })
);

  console.log("Natija:", result.SUBCLASS_OF_ID);

    console.log(`📩 Guruh ${i} ga birinchi habar yuborildi`);
  }
})();
