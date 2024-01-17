'use server'

export async function fetchChannels() {
    const channels = await fetch('/api/test'); // Fetch fresh data
    return channels;
}
