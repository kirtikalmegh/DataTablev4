
export const userColumns = [
    {   field: 'id',
        headerName: 'ID',
        width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell:(params) => {
          return(
            <>
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            </>
          )
        }
    },
    {
        field: "email",
        headerName:"Email",
        width:230,
    },
    {
        field: "age",
        headerName:"Age",
        width:100,
    },
    {
        field: "status",
        headerName:"Status",
        width:230,
        renderCell:(params) =>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]

export const userRows =[
{
    id:1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"1snow@gmai.com",
    status: "Active",
    age: 36,
},
{
    id:2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"2snow@gmai.com",
    status: "Passive",
    age: 42,
},
{
    id:3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"3snow@gmai.com",
    status: "Pending",
    age: 36,
},
{
    id:4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"4snow@gmai.com",
    status: "Active",
    age: 16,
},
{
    id:5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"5snow@gmai.com",
    status: "Passive",
    age: 22,
},
{
    id:6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"6snow@gmai.com",
    status: "Active",
    age: 15,
},
{
    id:7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"7snow@gmai.com",
    status: "Passive",
    age: 44,
},

{
    id:8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"8snow@gmai.com",
    status: "Active",
    age: 36,
},
{
    id:9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"snow@gmai.com",
    status: "Pending",
    age: 65,
},
{
    id:10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    email:"8snow@gmai.com",
    status: "Active",
    age: 65,
}
]
