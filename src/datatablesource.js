export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },{
        field: "user", headerName: "User", width: 230, renderCell: (params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt= "avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field:"email", 
        headerName:"Email",
        width:230,
    },
    {
        field:"age", 
        headerName:"Age",
        width:100,
    },
    {
        field:"status", 
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
    

];

//temporary data
export const userRows =[
    {
        id: 1,
        img:"https://avatars.githubusercontent.com/u/75834445?v=4",
        username:"Anand",
        status:"active",
        email:"anandmaurya8877@gmail.com",
        age: 23,

    },
    {
        id: 2,
        img:"https://media-exp1.licdn.com/dms/image/C4E03AQES0Ny_gDF0Og/profile-displayphoto-shrink_800_800/0/1623574435273?e=1673481600&v=beta&t=DjHNci_ZPYHz37IVQ0lkjIIFwzDFULCxj59Vy1N7D-Y",
        username:"Shivam",
        status:"active",
        email:"shivammaurya@gmail.com",
        age: 69,

    },
    {
        id: 3,
        img:"https://media-exp1.licdn.com/dms/image/C4D03AQFtMnksSG_74w/profile-displayphoto-shrink_800_800/0/1658516144596?e=1673481600&v=beta&t=9yJEqAYyPJ2SKsC23GmHUJHOtf24cDBoUp-PNr_OIfg",
        username:"Ambika",
        status:"active",
        email:"ambikasharma@gmail.com",
        age: 22,

    },
    {
        id: 4,
        img:"https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
        username:"Preeti",
        status:"offline",
        email:"preetiyadav@gmail.com",
        age: 21,

    },
    {
        id: 5,
        img:"https://i5.walmartimages.com/asr/33ba0093-ade3-4be5-b56d-bdfde7cca315.ada72db29835b7ef982104dccc0cc55b.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
        username:"Brijesh",
        status:"active",
        email:"brijeshmaurya@gmail.com",
        age: 24,

    },
    {
        id: 6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAqmurFvPdiEBK824gg5B_CD1nIgXnClXCA&usqp=CAU",
        username:"Subhash",
        status:"offline",
        email:"subashsingh@gmail.com",
        age: 22,

    },

]