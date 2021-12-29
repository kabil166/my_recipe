import React ,{ useState } from 'react'
import "./Header.css"
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Header({search}) {
    const [input, setInput] = useState("");
    const handleSearch=e=>{
        setInput(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();

        search(input);
    }
    return (
        <div className="header">
            <div className="header__master">
                <HeaderTopLeft />
                <HeaderTopRight />
            </div>
            <div className="header__children">
                <div className="header__top">
                    <div className="top__left">
                        <h1>Easy Meals</h1>
                    </div>
                    <div className="top__mid">
                        <select>
                            <option selected disabled>Categories</option>
                            <option>Veg</option>
                            <option>Non-veg</option>
                            <option>Spicy</option>
                            <option>Combo</option>
                        </select>
                        <form className="search__input" onSubmit={handleSubmit}>
                            <input type="text" onChange={handleSearch}/>
                            <button type="submit"><SearchOutlinedIcon/></button>
                        </form>

                    </div>
                    <div className="top__right">
                        <div><BookmarkAddOutlinedIcon/><p>Favourites</p></div>
                        <div><ShoppingCartOutlinedIcon/><p>Cart</p></div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className='bottom__left'>
                        <ul>
                            <li>HOME</li>
                            <li>RECIPES<sup style={{color:"orange"}}>*</sup></li>
                            <li>CATEGORIES</li>
                            <li>CONTACT</li>
                            <li>ABOUT</li>
                        </ul>
                    </div>

                    <div className="bottom__right">
                        <InstagramIcon className='insta__icon'/>
                        <TwitterIcon className='twitter__icon'/>
                        <FacebookIcon className='fb__icon'/>
                        <PinterestIcon className='pint__icon'/>
                        <RssFeedIcon className='rss__icon'/>
                        <YouTubeIcon className='yt__icon'/>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header
