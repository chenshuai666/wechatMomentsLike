import { useState } from "react"

// 获得中国时区时间
function transTime() {
    return new Date(new Date().getTime() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

function Maincontent({ addSst,onChange, addName, addText, addContentImg, addAddress, addMytime, addLike }) {
    // console.log(onChange)
    const sstRef = useRef(null)
    const imageRef = useRef(null)
    const nameRef = useRef(null)
    const textRef = useRef(null)
    const addressRef = useRef(null)
    const dateRef = useRef(null)
    const timeRef = useRef(null)
    const likeRef = useRef(null)
    // const [imgpath, setImgpath] = useState('')
    const getSst = () => {
        addSst(sstRef.current.value)
    }
    const uploadImg = (e) => {
        console.log(e.target.id)
        const operate = e.target.id
        const files = e.target.files
        if (operate === 'uploadAvatar') {
            const avatar = files[0]
            const reader = new FileReader()
            reader.readAsDataURL(avatar)
            reader.onload = function (event) {
                // console.log(this.result)
                onChange(this.result)
                // setImgpath(this.result)
            }
        } else {
            // console.log(files)
            for (let file of files) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function (event) {
                    addContentImg(this.result, file.name)
                }
            }
        }
    }
    const getName = () => {
        // console.log('111')
        addName(nameRef.current.value)
    }
    const getText = () => {
        addText(textRef.current.value)
    }
    const getAddress = () => {
        addAddress(addressRef.current.value)
    }
    
    const getTime = () => {
        const currentTime = transTime().split(' ')
        const currentDate = currentTime[0]
        const nowTime = currentTime[1].slice(0, 5)
        let res = ''
        if (dateRef.current.value && dateRef.current.value !== currentDate) {
            const tmp = dateRef.current.value.split('-')
            res += tmp[0] + '年' + tmp[1] + '月' + tmp[2] + '日' + ' '
        }
        res += timeRef.current.value ? timeRef.current.value : nowTime
        addMytime(res)
    }

    const getLike = (e) => {
        addLike(likeRef.current.value)
    }

    return (
        <>
            <div>
                <label htmlFor="">截图时间</label>
                <input ref={sstRef} type="time" name="screenshottime" />
                <button onClick={getSst}>添加截图时间</button>
            </div>
            <div>
                <label htmlFor="">上传头像</label>
                <input id="uploadAvatar" onChange={uploadImg} ref={imageRef} type="file" />
            </div>
            <div>
                <label htmlFor="">用户名</label>
                <input ref={nameRef} type="text" name="name" id="" />
                <button onClick={getName}>添加用户名</button>
            </div>
            <div>
                <label htmlFor="">内容</label>
                <textarea ref={textRef} name="content" id="" />
                <button onClick={getText}>添加内容</button>
            </div>
            <div>
                <label htmlFor="">内容图片</label>
                <input id="uploadContentImg" onChange={uploadImg} type="file" name="contentImg" multiple accept=".tif, .tiff,.webp,.svg,.png, .apng, .avif, .bmp,.gif,.ico, .cur, .jpg, .jpeg, .jfif, .pjpeg, .pjp" />
            </div>
            <div>
                <label htmlFor="">地点</label>
                <input ref={addressRef} type="text" name="address" id="" />
                <button onClick={getAddress}>添加地点</button>
            </div>
            <div>
                <label htmlFor="">时间</label>
                <input ref={dateRef} type="date" name="date" />
                <input ref={timeRef} type="time" name="time" />
                <button onClick={getTime}>添加时间</button>
            </div>
            <div>
                <label htmlFor="">点赞数</label>
                <input ref={likeRef} type="number" name="like" id="" />
                <button onClick={getLike}>添加点赞头像</button>
            </div>
        </>
    )
}

export default Maincontent