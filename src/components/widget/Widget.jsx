import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { color } from "@mui/system";
const Widget = ({type}) => {
    let data;

    //temporary
    const amount =100;
    const diff = 20;
    switch(type){
        case "user":
        data ={
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: <Person2OutlinedIcon className="icon" style={{color:"crimson", 
            backgroundColor:"#c98b99",
            
        }}
        />
            
        };
        break;
        case "order":
            data ={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                <ShoppingCartIcon className="icon"
                style={{
                      backgroundColor:"#bebf99",
                      color:"#d69c1e",
                }}
                
                />
            ),
                
            };
            break;
            case "earning":
                data ={
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                    <CurrencyExchangeIcon className="icon"
                    style={{
                        backgroundColor:"#9bcfb2",
                        color:"green",
                    }}
                    />
                    
                    ),
                    
                };
                break;
                case "balance":
                    data ={
                        title: "BALANCE",
                        isMoney: true,
                        link: "See details",
                        icon:( 
                        <AccountBalanceWalletIcon className="icon"
                        style={{
                            backgroundColor:"#c193c2",
                            color:"purple",

                        }}
                        />
                        
                        ),
                        
                    };
                    break;
        default:
            break;
    }




  return (
    <div className="widget">
        <div className="left">
           <span className="title">{data.title}</span>
           <span className="counter">
            {data.isMoney && "$"}{amount}
            </span>
           <span className="link">{data.link}</span>

        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>

    </div>
  );
};

export default Widget