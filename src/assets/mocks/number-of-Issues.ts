export const numberOfIssuesData = {
    "numberOfIssues": [
        {
            "issueNumber": 50,
            "date": "2019-11-20T10:42:48.822Z"
        },
        {
            "issueNumber": 100,
            "date": "2019-11-21T10:42:48.822Z"
        },
        {
            "issueNumber": 200,
            "date": "2019-11-22T10:42:48.822Z" 
        },
        {
            "issueNumber": 350,
            "date": "2019-11-23T10:42:48.822Z"
        },
        {
            "issueNumber": 700,
            "date": "2019-11-24T10:42:48.822Z"
        },
        {
            "issueNumber": 1000,
            "date": "2019-11-25T10:42:48.822Z"
        }
    ] as NumberOfIssues[]
} 

export interface NumberOfIssues {
    issueNumber: number;
    date: string;
}
