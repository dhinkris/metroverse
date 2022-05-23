import raw from './data/boost.csv';

export default async function search_blocks(required_boost){
    let data=null
    let block_ids=[]
    await fetch(raw)
        .then(r => r.text())
        .then(text => {
            data= text;
        });
    data=data.split('\n')
    await data.map((_line)=>{
        let count=required_boost.length
        required_boost.map((item)=>{
            if (!_line.split(',').slice(1,-1).includes(item)){
                return 0;
            } else{
                count-=1
            }
        })
        if (count==0){
            let block_id=_line.split(',')[0]
            block_ids.push(block_id)
        }

    })
    return block_ids
}