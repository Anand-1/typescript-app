

interface Idat{
    id: number;
    name: string;
    url: string;    
}

// Static fixture pattern: local data drives the Promise.all example requests.
const Idata: Idat[] = [
    {id: 1, name: 'Alice', url: 'https://cataas.com/cat?json=true'},
    {id: 2, name: 'Bob', url: 'https://cataas.com/cat?json=true'},
    {id: 3, name: 'Charlie', url: 'https://cataas.com/cat?json=true'},
]

export default Idata;
