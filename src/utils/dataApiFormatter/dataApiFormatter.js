export function dataApiFormatter(data){
    if(data){
        return data.map((user)=>{
            return{
                name:user.name,
                phone:user.phone
            }
        })
    }
}

        