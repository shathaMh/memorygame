import React, {useState, useEffect} from 'react'
import "./Cards.css"
import "./images/cover.jpg"

export default function Cards() {

    const [firstCheck, setfirstCheck] = useState("")
    const [mainImg, setmainImg] = useState("https://stampme.com/wp-content/uploads/2020/06/noun-coffee.png")
    const [imgSrc, setImgSrc] = useState([mainImg, ""])
    const [firstCheckID, setfirstCheckID] = useState("")
    const [wincount, setwincount] = useState(0)
    const [losecount, setlosecount] = useState(0)

    const [cardArr, setCardArr] = useState([
        { id: 1,toggle:false, imgUrl: "https://images.assetsdelivery.com/compings_v2/fillvector/fillvector2005/fillvector200501685.jpg", name: "a" },
        { id: 2, toggle:false, imgUrl: "https://assets.materialup.com/uploads/769dac95-29a7-4cf5-b935-122b84c694e2/preview.jpg", name: "b" },
        { id: 3,toggle:false, imgUrl: "https://images.assetsdelivery.com/compings_v2/fillvector/fillvector2005/fillvector200501685.jpg", name: "a" },
        { id: 4, toggle:false,imgUrl: "https://assets.materialup.com/uploads/769dac95-29a7-4cf5-b935-122b84c694e2/preview.jpg", name: "b" },
        { id: 5,toggle:false, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/09/59/cup-309508_1280.png", name: "d" },
        { id: 6,toggle:false, imgUrl: "https://www.kindpng.com/picc/m/265-2651030_coffee-icons-png-hot-coffee-icon-png-transparent.png", name: "c" },
        { id: 7,toggle:false, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/09/59/cup-309508_1280.png", name: "d" },
        { id: 8,toggle:false, imgUrl: "https://www.kindpng.com/picc/m/265-2651030_coffee-icons-png-hot-coffee-icon-png-transparent.png", name: "c" },
    ]);

    const reSet = () => {
        setfirstCheck("")
    }


    const flip = (elem, index) => {
        const id = elem.id;
        let myArray = JSON.parse(JSON.stringify(cardArr))
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].id == id) {
                if (myArray[i].toggle ==false) {
                    myArray[i].toggle = true
                }
                else {
                    myArray[i].toggle = true
                }
            }
        }
        setCardArr(myArray)
        
        if (firstCheck == "") {
            setfirstCheck(elem.name)    // firstcheck = c 
            return;
        }

        if (firstCheck !== elem.name) { 
            let mylosecount = losecount + 1;
            setlosecount(mylosecount)

            setTimeout(() => {
                // const myArray = [...cardArr]
                for (let i = 0; i < myArray.length; i++) {
                    if(myArray[i].id==elem.id){
                    myArray[i].toggle = false
                } if (myArray[i].name== firstCheck){
                    myArray[i].toggle =false
            }}
            setfirstCheck("");

                setCardArr(myArray)
            }, 300)
        }
        //  متشابهين 
        else {
            let mywincount = wincount + 1;
            setwincount(mywincount);
            setfirstCheck("")
        }
    }

    return (
        <div>
            <h1 className="title">
            ℳemory Gaϻe

            </h1>
            <div className="container">
            
                {
                    cardArr.map((elem,index)=>{
                        if(elem.toggle===true){
                        return <div  key={index}>
                        <img src={elem.imgUrl} alt="" />
                            </div>
                        }
                        else {
                            return <div onClick={()=>{flip(elem, index)}} key={index}>
                            <img src={mainImg} alt="" />
                            </div>
                        }
                    })
                }

            </div>
            <div className="result-container" >
                <span className="result" > Points : <span className="points">{wincount}</span> </span>
                <span className="result" > lose: <span className="lose">{losecount}</span> </span>
            </div>
        </div>
    )
            }