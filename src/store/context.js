const projects_data = [
    {
        id: "structs",
        title: "Structs.sh",
        abstract: "Originated through the idea of making data structures and algorithms more accessible to students, Structs attempts to break this barrier by introducing a new way of teaching one of the most essential concepts in Computer Science",
        link: "https://structs.netlify.app/",
        brief: "An algorithm visualisation tool",
        experience: [
            {
                title: "UX Designer",
                techs: ["Figma"]
            },
            {
                title: "Developer",
                techs: ["React", "Animejs"]
            },
            {
                title: "System Architect",
                techs: []
            }
        ],
        blocks: [
            {
                type: "textBlock",
                data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                type: "image",
                data: "https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2F196088949_197834972201853_553927757694299212_n.jpg?alt=media&token=64a77184-f58a-4981-bd16-eeb477d57ce6"
            },
            {
                type: "divider"
            }
        ]
    }
]

const more_projects_data = [
    {
        title: "SYNC Hack 2021",
        body: "Designed a skill-sharing based social media app. Implemented Animations frontend Functionality. Finalists.",
        link: "/",
        id: "1"
    },
    {
        title: "MAC Hackathon 2021",
        body: "Created a NLP which extracted ingredients from recipe lists. Created the ML model in TensorFlow and served to the frontend.",
        link: "/",
        id: "2"
    },
    {
        title: "180DC x COMM-STEM Case Comp 2021",
        body: "Developed a technical solution to help education become more accessible to the disadvantaged. Finalists",
        link: "/",
        id: "3"
    },
    {
        title: "CSE Hackathon Lite 2020",
        body: "Implemented a COVID-19 tracker. Scraped NSW Government websites for information, and relayed to relavent subscribers with Twilio.",
        link: "/",
        id: "4"
    }
]

export {projects_data, more_projects_data}