// app 是管理应用程序生命周期用的
// BrowserWindow 是创建还有控制应用窗口用的 ..
const {app, BrowserWindow } = require('electron')

// 暂时设置成全局变量，防止垃圾回收
let win

// 定义事件
const createWindow = () => {
    win = new BrowserWindow()
    win.loadURL('https://funnie.cc')
}

// 绑定事件
app.on('ready', createWindow);