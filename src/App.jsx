import { useState } from 'react'
import Header from './layout'
import Main from './views/main'
import Content from './views/content'
import html2canvas from 'html2canvas'
// import './App.css'

function App() {
  const [sst, setSst] = useState('')
  const [avatarpath, setAvatarpath] = useState('')
  const [userName, setUserName] = useState('')
  const [text, setText] = useState('')
  const [contentImg, setContentImg] = useState([])
  const [addr, setAddr] = useState('')
  const [mytime, setMytime] = useState('')
  const [like, setLike] = useState(0)

  // 截图时间
  function getSst(e) {
    setSst(e)
  }
  // 头像图片
  function getPath(e) {
    // console.log(e)
    setAvatarpath(e)
  }
  // 用户名
  function getName(e) {
    // console.log(e)
    setUserName(e)
  }
  // 文字内容
  function getText(e) {
    // console.log(e)
    setText(e)
  }
  // 图片内容
  function getContentImg(e, id) {
    // console.log(e)
    setContentImg((imgs)=>[...imgs, {value:e,id:id}])
    // console.log(contentImg)
  }
  // 地点
  function getAddress(e) {
    // console.log(e)
    setAddr(e)
  }
  // 时间
  function getMytime(e) {
    setMytime(e)
  }
  //点赞数
  function getLike(e) {
    // console.log(e)
    setLike(e)
  }
  // 生成图片
  function createImg() {
    const dom = document.querySelector('.container')
    // console.log(dom)
    html2canvas(dom).then((canvas) => {
      // document.body.appendChild(canvas)
      // console.log(canvas)
      const downloadImg = document.querySelector('#downloadImg')
      downloadImg.href = canvas.toDataURL()
      // console.log(downloadImg)
    })
  }
  return (
    <>
      <Header bbb="test">
        <div>aaa</div>
      </Header>
      <Main
        addSst={getSst}
        onChange={getPath}
        addName={getName}
        addText={getText}
        addContentImg={getContentImg}
        addAddress={getAddress}
        addMytime={getMytime}
        addLike={getLike}
      >
      </Main>
      <Content
        sst={sst}
        avatarpath={avatarpath}
        userName={userName}
        text={text}
        contentImg={contentImg}
        addr={addr}
        mytime={mytime}
        like={like}
      >
      </Content>
      <button onClick={createImg}>生成图片</button>
      <div>
        <a id="downloadImg" href="" download="screenshoot.png">下载截图</a>
      </div>
    </>
  )
}

export default App
