import Battery from './battery'
// import Wifi from './wifi'
import Gprs from './gprs'
import randomNums from '../utils/randomNums'
import trash from '@/assets/trash.svg'
import likeicon from '@/assets/heart.svg'
import smile from '@/assets/smile1.svg'
import wifi from '@/assets/wifi.svg'
import './content.css'
// import avatarsPath from '../utils/avatars'
import { useEffect } from 'react'

function Content({ sst, avatarpath, userName, text, contentImg, addr, mytime, like }) {
    // 内容图片列表
    const imgList = contentImg.length > 1 ? (
        <div className="grid">
            {contentImg.map(item => (<div key={item.id}><img className='mul-img' src={item.value}></img></div>))}
        </div>
    ) : ( contentImg.length === 1 ?(
            <img className='one-img' src={contentImg[0]?.value}></img>
        ) : null
    )
    // 自带头像
    let avatars = Object.keys(import.meta.glob('/public/avatars/*', { eager: true }))
    // console.log(process.env.NODE_ENV)
    // console.log(avatars)
    if(process.env.NODE_ENV==='production') avatars = avatars.map(item=>item.slice(7))
    const showAvatarsIndex = randomNums(0, avatars.length-1, like)
    // console.log(showAvatarsIndex)
    // 点赞头像列表
    const likeAvatarList = showAvatarsIndex.map(item=>(<div key={item}><img src={avatars[item]}></img></div>))

    return (
        <>
            <div className="container" >
                <div id="topBar">
                    <div id="time">{ sst }</div>
                    <div id="lable">
                        <Gprs></Gprs>
                        {/* <Wifi></Wifi> */}
                        <img className='wifi' src={wifi} />
                        <Battery></Battery>
                    </div>
                </div>
                <div id="header">
                    <div className='arrow'></div>
                    <div>详情</div>
                    <div className='more'>•••</div>
                </div>
                <div id="main">
                    <div className="avatar" style={{backgroundImage:`url(${avatarpath})`}}></div>
                    <div className="content">
                        <div className="name darkblue">{ userName }</div>
                        <div className="text">{ text }</div>
                        <div className="pic-group">{ imgList }</div>
                        <div className="info">
                            <div className="addr">{ addr }</div>
                            <div className="opt">
                                <div className="time">
                                    <span>{mytime}</span>
                                    <img src={trash} alt="" />
                                </div>
                                <div className="handleOpt darkblue">••</div>
                            </div>
                        </div>
                    </div>
                    <div className="like">
                        <div className="like-icon"><img src={likeicon} alt="" /></div>
                        <div className="like-avatars">{ likeAvatarList }</div>
                        <div className="like-icon"></div>
                    </div>
                </div>
                <div id="comments">
                    <div className="comments-box">
                        <div className="input-box">评论</div>
                        <img src={smile} alt="" />
                    </div>
                    <div className="gesture"></div>
                </div>
            </div>
        </>
    )
}

export default Content