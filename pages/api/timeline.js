const tweets = [
    {
        name: "Fred",
        handle: "muchcattocute",
        profilePic: "http://placekitten.com/200/300",
        content: "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
        media: "http://placekitten.com/200/300?"
    }
]


module.exports = (req, res) => {
    res.json(tweets)
}