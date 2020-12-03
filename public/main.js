
let n=1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array=JSON.parse(request.response)
            array.forEach(item=>{
                const li=document.createElement("li")
                li.textContent=item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()

}

getHTML.onclick=()=>{
    const request=new XMLHttpRequest
    request.open('GET','3.html')
    request.onload=()=>{
        console.log('加载html成功')
        //创建div元素
        const div=document.createElement('div')
        //填充div
        div.innerHTML=request.response
        //插到body中
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        console.log('Html加载失败')
    }
    request.send()
}

getJSON.onclick=()=>{
    const request=new XMLHttpRequest
    request.open('GET','5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response)
            const object=JSON.parse(request.responseXML)
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest
    request.open('GET','4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            console.log('获取xml成功')
            const dom=request.responseXML
            const text=dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    }
    request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest
    request.open('GET','2.js')
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('下载完成啦')
        }
        if(request.status>=200 && request.status<300){
            //创建script元素
     const script=document.createElement('script')
    //     //填充script元素
       script.innerHTML=request.response
    //     //插入到body中
         document.body.appendChild(script)

        }
        else{
            alert('加载js失败')
        }
         
    }

    // request.onload=()=>{
    //    //创建script元素
    //     const script=document.createElement('script')
    //     //填充script元素
    //     script.innerHTML=request.response
    //     //插入到body中
    //     document.body.appendChild(script)
    // }

    // request.onerror=()=>{
    //     console.log('引入2.js失败')
       
    // }
    request.send()

}

getCSS.onclick =()=>{

const request=new XMLHttpRequest()
request.open('GET','style.css')

request.onload=()=>{
    console.log(request.response)
    console.log('成功了')
    //创建style元素
    const style=document.createElement('style')
    //填写style内容
    style.innerHTML=request.response
    //查到Head中
    document.head.appendChild(style)
}
request.onerror=()=>{
    console.log('失败了')
}

request.send()
}
