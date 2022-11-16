import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows =[
        {
            id: 2148359,
            project: "Logo Design",
            img:"https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900",
            customer:"Devansh",
            date: " 24 March",
            amount: 1200,
            method: "Online Payment",
            status: "Approved",

        },
        {
            id: 1254689,
            project: "Web Page",
            img:"https://mobirise.com/assets52/images/poster.png",
            customer: "Michael",
            date: "8 November",
            amount: 1550,
            method:"Online Payment",
            status: "Approved"

        },
        {
            id: 1254689,
            project: "Video Editing",
            img: "https://blog.storyblocks.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-19-at-2.44.08-PM.png",
            customer: "Michael",
            date: "8 November",
            amount: 1550,
            method:"Online Payment",
            status: "Pending"

        },
        {
            id: 1254689,
            project: "App Design",
            img:"https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?w=2000",
            customer: "Michael",
            date: "8 November",
            amount: 1550,
            method:"Online Payment",
            status: "Approved"
        },
        {
            id: 1254689,
            project: "Content Writing",
            img:"https://i.pinimg.com/originals/86/2e/8c/862e8c4924f479439af714deca88e7a0.jpg",
            customer: "Michael",
            date: "8 November",
            amount: 1550,
            method:"Online Payment",
            status: "Pending"

        },
        {
            id: 1254689,
            project: "UX/UI Design",
            img:"https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=2000",
            customer: "Michael",
            date: "8 November",
            amount: 1550,
            method:"Online Payment",
            status: "Approved"

        },
    ];
  return (
     <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking Id</TableCell>
          <TableCell className="tableCell">Project</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.project}
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List