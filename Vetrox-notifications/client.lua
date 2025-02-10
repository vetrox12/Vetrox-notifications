local function notify(message, type, duration)
    local color = Config.NotificationColors[type] or 'yellow'
    SendNUIMessage({
        type = 'notify',
        message = message,
        notifyType = type,
        duration = duration,
        color = color
    })
end

exports('notify', notify)

RegisterNetEvent("notifications:sendNotification", function(message, type, duration)
    notify(message, type, duration)
end)

-- https://discord.gg/hZpJpAu3Zt