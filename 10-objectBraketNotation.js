let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
// where arrays use square bracket notation to access properties, objects use what is called dot (.)  notation
console.log('All data:' , netflix);
console.log('Just season info:' , netflix.season1.seasonInfor);
console.log('Specific episode name:') , netflix.seasonIfo[0].episodeName);

/*
CHALLENGE
************
    - Pick an episode to console.log
    - Using dot notation, walk through the netflix object and print off both an episode number and an episode name.
*/