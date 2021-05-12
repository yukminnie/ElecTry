// app 是管理应用程序生命周期用的
// BrowserWindow 是创建还有控制应用窗口用的 ..
const {app, BrowserWindow } = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

// 暂时设置成全局变量，防止垃圾回收
let win

// 定义事件
const createWindow = () => {
    win = new BrowserWindow({
        width: 960,
        height: 600,
        minWidth: 830,
        minHeight: 500,
        backgroundColor: '#f8f8f8'
    })
    win.loadURL(`file://${__dirname}/main.html`)

    // 手动关闭窗口, 应用会做什么，接下面 all-closed 和 activate
    win.on('closed', () => {
        win = null
    })
}

// 绑定事件
app.on('ready', createWindow);

// 不是 mac 平台就完全退出
app.on('window-all-closed', () => {
    if(process.platform !== "darwin") {
        app.quit()
    }
})

// mac 平台可以重新激活
app.on('activate', () => {
    if(win = null) {
        createWindow()
    }
})