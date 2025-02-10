# Vetrox-notifications

عشان يشتغل معك السكربت بشكل صحيح سوي الي اقول عليه
--------------------------------------------------------
روح لي
qb-core/client/functions.lua 

اضغط cntrl + f

ابحث عن 

QBCore.Functions.Notify

استبدل هذا بالي عندك

function QBCore.Functions.Notify(text, texttype, length)
    text = text or 'nothing'
    texttype = texttype or 'primary'
    length = length or 5000
    TriggerEvent("notifications:sendNotification", text, texttype, length)
end
--------------------------------------------------------
اذا تبي تغير الالوان تلقاها بالكونفق
--------------------------------------------------------
