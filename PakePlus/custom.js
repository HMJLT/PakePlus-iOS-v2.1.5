window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 非常重要的链接处理函数，强制所有链接都在当前页面打开
// 非常非常重要，不懂代码不要动，这里可以解决所有新窗口问题，但也可能破坏某些功能
const hookClick = (e) => {
    const origin = e.target.closest('a')
    
    console.log('处理的链接:', origin)
    
    // 检查是否是有效的链接元素
    if (origin && origin.href) {
        // 阻止所有链接的默认行为
        e.preventDefault()
        console.log('处理链接，在当前页打开:', origin.href)
        
        // 在当前页面跳转
        try {
            // 如果有origin.href说明是有效链接
            if (origin.href && origin.href !== '#' && origin.href !== 'javascript:void(0);') {
                location.href = origin.href
            } else {
                console.log('无效链接，不跳转:', origin.href)
                // 如果是锚点链接，执行默认行为
                if (origin.href && (origin.href.includes('#') || origin.href === '#')) {
                    console.log('锚点链接，执行默认行为')
                    origin.click()
                }
            }
        } catch (error) {
            console.error('链接跳转出错:', error)
        }
    } else {
        console.log('不是有效链接，不处理:', origin)
    }
}

// 绑定点击事件（通常添加到document上）
document.addEventListener('click', hookClick)
window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
