let user = {
    getout: function () {
        $.post(USERAPI.getout)

            // ajax 要有退出请求
            .then(function (res) {
                $('#out').on('click', function () {
                    if (res.code == 200) {
                        alert('退出成功')
                        window.location.href = "./login.html"
                    }
                })

            })
    },
    getin: function (name, password) {
        $.post(USERAPI.getin, {
            user_name: name,
            password: password
        }).then(function (res) {
            if (res.code == 200) {
                alert('登录成功')
                // 跳转到主页
                window.location.href = "./index.html"
            }
            else {
                alert('登录失败')
            }
        })

    },
    // 调接口 提交账号密码用户信息是接口文档里方式是post  用老师教的新方式写

    // $.post(url地址，数据)then()
    // 登录






    getuser: function () {
        $.get(USERAPI.getuser)
            .then(function (res) {
                // 这里的意思 把请求返回的数据 管理员的名字 和头像 放在上面
                // $('#userid') 放管理员名字的标签   $('#userid').text 标签的文本
                $('#userid').text(res.data.nickname)
                $('userhd').prop('src', res.data.user_pic)
            })
    }
}
