
let magican_name=["zakoota","mongo","Hubo","Rikit"]
function show_magicians(magican_name)
{
    magican_name.map((item) =>{
        console.log(item)
    });

    
}

show_magicians(magican_name)

function make_great()
{
   for(let i=0;i<=magican_name.length;i++)
   {
    magicianNames[i]=`The Great${magican_name[i]}`;
   }
}
make_great()
show_magicians(magican_name)



