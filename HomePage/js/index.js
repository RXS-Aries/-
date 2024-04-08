window.onload = function () {
    //刷新页面后滚动条回到0位
    window.scrollTo(0, 0);
    //微信图片
    var weiXin = document.getElementById("weiXin_img");
    var weiXinIcon = document.getElementById("weiXin_icon");
    var weiHeight = document.getElementById("weiXin_img").offsetHeight;
    var myImg = document.getElementById("my_img");
    //向下图标框架
    var nextPage = document.getElementById("next_page");
    //向下图标
    var pageOne = document.getElementById("pageOne");
    var pageTwo = document.getElementById("pageTwo");
    var pageThree = document.getElementById("pageThree");
    //获取切换背景图片时需要隐藏的标签
    var navigtion = document.getElementById("navigation");
    var hSculpture = document.getElementById("h_sculpture");
    var singnature = document.getElementById("signature");
    // 向下翻页动画变量
    var pageOpacity = 40;
    var pageOpacityTwo = 20;
    var pageOpacityThree = 0;
    var direction = 1;
    var directionTwo = 1;
    var directionThree = 1;
    //相册动画设置
    //获取到元素
    var photoOne = document.getElementById("photo_one");
    var photoTwo = document.getElementById("photo_two");
    var photoThree = document.getElementById("photo_three");
    var photoFour = document.getElementById("photo_four");
    var photoFive = document.getElementById("photo_five");
    var photoSix = document.getElementById("photo_six");
    //图层判断
    var layer = 2;
    // 第一张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var oneArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var oneDire = 1;
    //旋转角度
    var oneRotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var oneDirectionBack = 1;
    //旋转角度
    var oneRotationBack = 0;
    // 抽出初始位置
    var oneInitial = 0;
    // 放回初始位置
    var oneInitialBack = 250;
    // 第二张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var twoArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var twoDire = 1;
    //旋转角度
    var twoDotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var twoDirectionBack = 1;
    //旋转角度
    var twoRotationBack = 0;
    // 画面抽出初始位置
    var twoInitial = 100;
    // 放回初始位置
    var twoInitialBack = 250;
    // 第三张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var threeArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var threeDire = 1;
    //旋转角度
    var threeDotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var threeDirectionBack = 1;
    //旋转角度
    var threeRotationBack = 0;
    // 画面抽出初始位置
    var threeInitial = 200;
    // 放回初始位置
    var threeInitialBack = 250;
    // 第四张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var fourArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var fourDire = 1;
    //旋转角度
    var fourDotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var fourDirectionBack = 1;
    //旋转角度
    var fourRotationBack = 0;
    // 画面抽出初始位置
    var fourInitial = 300;
    // 放回初始位置
    var fourInitialBack = 250;
    // 第五张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var fiveArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var fiveDire = 1;
    //旋转角度
    var fiveDotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var fiveDirectionBack = 1;
    //旋转角度
    var fiveRotationBack = 0;
    // 画面抽出初始位置
    var fiveInitial = 400;
    // 放回初始位置
    var fiveInitialBack = 250;
    // 第六张动画
    //取出相册动画
    //点击时判断相片是否拿出
    var sixArrayAnJudg;
    // 抽出移动方向，1表示向左，-1表示向右
    var sixDire = 1;
    //旋转角度
    var sixDotation = -10;
    //放回相册动画
    // 放回移动方向，1表示向左，-1表示向右
    var sixDirectionBack = 1;
    //旋转角度
    var sixRotationBack = 0;
    // 画面抽出初始位置
    var sixInitial = 500;
    // 放回初始位置
    var sixInitialBack = 250;
    // 微信图片点击显示
    var i = weiHeight;
    weiXinIcon.onclick = function () {              //点击事件
        if (i <= 0) {                               //判断二维码是否显示
            let imgShow = setInterval(function () {     //设置定时函数
                weiXin.style.height = i + "px";     //定时增加图片容器高度
                i = i + 5;
                if (i > 215) {                      //判断是否完全展开
                    clearInterval(imgShow);             //清除定时器
                }
            }, 1000 / 60);
            return i;
        } else if (i >= 215) {
            let imgHide = setInterval(function () {
                weiXin.style.height = i + "px";
                i = i - 5;
                if (i < 0) {
                    clearInterval(imgHide);
                }
            }, 1000 / 60);
            return i;
        }
    }
    // 图片旋转
    var myImgRun = function () {       //设置旋转函数
        let myTransform = 0;            //设置旋转角度为0
        let myImgShow = setInterval(function () {     //定时旋转角度
            myTransform += 2;        //每次执行角度加2
            myImg.style.transform = 'rotate(' + myTransform + 'deg)';     //设置样式角度
            if (myTransform == 360) {         //定时条件退出
                clearInterval(myImgShow);
            }
        }, 1000 / 60);
    }
    myImgRun();
    //向下按钮动画
    //第一个
    var pageRun = function () {
        if (pageOpacity < 100 && direction === 1) {
            // 从 0 到 1 的动画
            pageOpacity += 1; // 每次增加一点透明度
        } else if (pageOpacity > 0 && direction === -1) { // 从 1 到 0 的动画
            pageOpacity -= 1; // 每次减少一点透明度
        }
        // 更新动画元素的透明度
        pageOne.style.opacity = pageOpacity / 100;
        // 检查是否到达动画的结束点，并切换方向
        if ((pageOpacity === 100 && direction === 1) || (pageOpacity === 0 && direction === -1)) {
            direction *= -1; // 切换动画方向
        }
        // 如果动画还在进行中，请求下一帧
        if (pageOpacity >= 0 && pageOpacity <= 100) {
            window.requestAnimationFrame(pageRun);
        }
    };
    // 开始动画
    window.requestAnimationFrame(pageRun);
    //第二个
    var pageRunTwo = function () {
        if (pageOpacityTwo < 100 && directionTwo === 1) {
            // 从 0 到 1 的动画
            pageOpacityTwo += 1; // 每次增加一点透明度
        } else if (pageOpacityTwo > 0 && directionTwo === -1) { // 从 1 到 0 的动画
            pageOpacityTwo -= 1; // 每次减少一点透明度
        }
        // 更新动画元素的透明度
        pageTwo.style.opacity = pageOpacityTwo / 100;
        // 检查是否到达动画的结束点，并切换方向
        if ((pageOpacityTwo === 100 && directionTwo === 1) || (pageOpacityTwo === 0 && directionTwo === -1)) {
            directionTwo *= -1; // 切换动画方向
        }
        // 如果动画还在进行中，请求下一帧
        if (pageOpacityTwo >= 0 && pageOpacityTwo <= 100) {
            window.requestAnimationFrame(pageRunTwo);
        }
    };
    // 开始动画
    window.requestAnimationFrame(pageRunTwo);
    //第三个
    var pageRunThree = function () {
        if (pageOpacityThree < 100 && directionThree === 1) {
            // 从 0 到 1 的动画
            pageOpacityThree += 1; // 每次增加一点透明度
        } else if (pageOpacityThree > 0 && directionThree === -1) { // 从 1 到 0 的动画
            pageOpacityThree -= 1; // 每次减少一点透明度
        }
        // 更新动画元素的透明度
        pageThree.style.opacity = pageOpacityThree / 100;
        // 检查是否到达动画的结束点，并切换方向
        if ((pageOpacityThree === 100 && directionThree === 1) || (pageOpacityThree === 0 && directionThree === -1)) {
            directionThree *= -1; // 切换动画方向
        }
        // 如果动画还在进行中，请求下一帧
        if (pageOpacityThree >= 0 && pageOpacityThree <= 100) {
            window.requestAnimationFrame(pageRunThree);
        }
    };
    // 开始动画
    window.requestAnimationFrame(pageRunThree);
    //背景图片变动
    //获取到页面内容高度
    var documentHeight = document.documentElement.scrollHeight;
    //点击事件
    nextPage.onclick = function () {
        //点击时获取当前页面显示位置
        let rollingChange = document.documentElement.scrollTop;
        //判断页面是否在顶部
        if (rollingChange == 0) {
            //点击变动滚动条位置，平滑显示
            window.scrollTo({
                top: documentHeight,
                behavior: "smooth",
            });
            //设置点击动画旋转
            let pageTransform = 0;
            let pageShowOne = setInterval(() => {
                pageTransform += 5;
                nextPage.style.transform = 'rotate(' + pageTransform + 'deg)';
                if (pageTransform == 180) {
                    clearInterval(pageShowOne);
                }
            }, 1000 / 60);
            navigtion.style.display = "none";
            hSculpture.style.display = "none";
            singnature.style.display = "none";
        } else if (rollingChange != 0) {
            //点击变动滚动条位置,平滑显示
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            //点击时动画翻转
            let pageTransform = 180;
            let pageShowTwo = setInterval(() => {
                pageTransform += 5;
                nextPage.style.transform = 'rotate(' + pageTransform + 'deg)';
                if (pageTransform == 360) {
                    clearInterval(pageShowTwo);
                }
            }, 1000 / 60);
            navigtion.style.display = "block";
            hSculpture.style.display = "block";
            singnature.style.display = "block";
        }
    }
    //相册第一张图片点击事件
    photoOne.onclick = function oneLavelyChange() {
        //当值为null的时候抽出图片
        if (oneArrayAnJudg == null) {
            // 根据方向和初始位置更新图片位置
            if (oneDire == 1) {
                // 向左移动
                if (oneInitial > -100) {
                    // 每一帧减5个像素
                    oneInitial -= 5;
                } else if (oneInitial == -100) {
                    // 到达左侧边界，改变方向
                    oneDire = -1;
                    layer = layer + 1;
                    // 将图片放在最上面
                    photoOne.style.zIndex = layer;
                }
                //设置动画旋转
                if (oneRotation > -20) {
                    // 逆时针旋转20度
                    oneRotation--;
                }
                // 到达左侧边界后向右移动
            } else if (oneDire == -1) {
                // 向右移动到250
                if (oneInitial < 250) {
                    // 每一帧加5个像素
                    oneInitial += 5;
                    // 到达右侧边界后停止
                } else if (oneInitial == 250) {
                    // 设置方向为0表示停止
                    oneDire = 0;
                }
                //设置动画旋转
                if (oneRotation < 0) {
                    oneRotation++;
                }
            }
            // 更新图片样式
            photoOne.style.left = oneInitial + "px";
            // 更新旋转角度
            photoOne.style.transform = 'rotate(' + oneRotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (oneDire != 0) {
                window.requestAnimationFrame(oneLavelyChange);
            } else if (oneDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                oneArrayAnJudg = 1;
                // 将抽出的执行条件复位
                oneDire = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                oneInitial = 0;
                // 将角度也复位
                oneRotation = -10;
            }
        }
        // 值为1的时候放回图片
        else if (oneArrayAnJudg == 1) {

            if (oneDirectionBack == 1) {
                // 向左返回
                if (oneInitialBack > -100) {
                    // 每次移动像素
                    oneInitialBack -= 5;
                } else if (oneInitialBack == -100) {
                    // 二段返回动画
                    oneDirectionBack = -1;
                    // 将图层放到后面
                    photoOne.style.zIndex = 0;
                }
                //设置动画旋转
                if (oneRotationBack > -20) {
                    oneRotationBack--;
                }
            } else if (oneDirectionBack == -1) {
                // 向右返回动画
                if (oneInitialBack < 0) {
                    oneInitialBack += 5;
                } else if (oneInitialBack == 0) {
                    // 停止动画
                    oneDirectionBack = 0;
                }
                //设置动画旋转
                if (oneRotationBack < -10) {
                    oneRotationBack++;
                }
            }
            // 更新图片样式
            photoOne.style.left = oneInitialBack + "px";
            // 更新角度样式
            photoOne.style.transform = 'rotate(' + oneRotationBack + 'deg)';
            // 判断角度的执行条件
            if (oneDirectionBack != 0) {
                window.requestAnimationFrame(oneLavelyChange);
            } else if (oneDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                oneArrayAnJudg = null;
                // 复位执行条件,已被下次执行
                oneDirectionBack = 1;
                // 将参数设置为本动画的执行条件,做好复位
                oneInitialBack = 250;
                // 旋转角度也一样
                oneRotationBack = 0;
            }
        }
    }
    //相册第二张图片点击事件
    photoTwo.onclick = function twoLavelyChange() {
        //当值为null的时候抽出图片
        if (twoArrayAnJudg == null) {
            // 根据方向和初始位置更新图片位置
            if (twoDire == 1) {
                // 向左移动
                if (twoInitial > 0) {
                    // 每一帧减5个像素
                    twoInitial -= 5;
                } else if (twoInitial == 0) {
                    // 到达左侧边界，改变方向
                    twoDire = -1;
                    layer = layer + 1;
                    // 将图片放在最上面
                    photoTwo.style.zIndex = layer;
                }
                //设置动画旋转
                if (twoDotation > -20) {
                    // 逆时针旋转20度
                    twoDotation--;
                }
                // 到达左侧边界后向右移动
            } else if (twoDire == -1) {
                // 向右移动到250
                if (twoInitial < 250) {
                    // 每一帧加5个像素
                    twoInitial += 5;
                    // 到达右侧边界后停止
                } else if (twoInitial == 250) {
                    // 设置方向为0表示停止
                    twoDire = 0;
                }
                //设置动画旋转
                if (twoDotation < 0) {
                    twoDotation++;
                }
            }
            // 更新图片样式
            photoTwo.style.left = twoInitial + "px";
            // 更新旋转角度
            photoTwo.style.transform = 'rotate(' + twoDotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (twoDire != 0) {
                window.requestAnimationFrame(twoLavelyChange);
            } else if (twoDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                twoArrayAnJudg = 1;
                // 将抽出的执行条件复位
                twoDire = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                twoInitial = 100;
                // 将角度也复位
                twoDotation = -10;
            }
        }
        // 值为1的时候放回图片
        else if (twoArrayAnJudg == 1) {

            if (twoDirectionBack == 1) {
                // 向左返回
                if (twoInitialBack > 0) {
                    // 每次移动像素
                    twoInitialBack -= 5;
                } else if (twoInitialBack == 0) {
                    // 二段返回动画
                    twoDirectionBack = -1;
                    // 将图层放到后面
                    photoTwo.style.zIndex = 0;
                }
                //设置动画旋转
                if (twoRotationBack > -20) {
                    twoRotationBack--;
                }
            } else if (twoDirectionBack == -1) {
                // 向右返回动画
                if (twoInitialBack < 100) {
                    twoInitialBack += 5;
                } else if (twoInitialBack == 100) {
                    // 停止动画
                    twoDirectionBack = 0;
                }
                //设置动画旋转
                if (twoRotationBack < -10) {
                    twoRotationBack++;
                }
            }
            // 更新图片样式
            photoTwo.style.left = twoInitialBack + "px";
            // 更新角度样式
            photoTwo.style.transform = 'rotate(' + twoRotationBack + 'deg)';
            // 判断角度的执行条件
            if (twoDirectionBack != 0) {
                window.requestAnimationFrame(twoLavelyChange);
            } else if (twoDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                twoArrayAnJudg = null;
                // 复位执行条件,已被下次执行
                twoDirectionBack = 1;
                // 将参数设置为本动画的执行条件,做好复位
                twoInitialBack = 250;
                // 旋转角度也一样
                twoRotationBack = 0;
            }
        }
    }
    //相册第三张图片点击事件
    photoThree.onclick = function threeLavelyChange() {
        //当值为null的时候抽出图片
        if (threeArrayAnJudg == null) {
            // 根据方向和初始位置更新图片位置
            if (threeDire == 1) {
                // 向左移动
                if (threeInitial > 100) {
                    // 每一帧减5个像素
                    threeInitial -= 5;
                } else if (threeInitial == 100) {
                    // 到达左侧边界，改变方向
                    threeDire = -1;
                    layer = layer + 1;
                    // 将图片放在最上面
                    photoThree.style.zIndex = layer;
                }
                //设置动画旋转
                if (threeDotation > -20) {
                    // 逆时针旋转20度
                    threeDotation--;
                }
                // 到达左侧边界后向右移动
            } else if (threeDire == -1) {
                // 向右移动到250
                if (threeInitial < 250) {
                    // 每一帧加5个像素
                    threeInitial += 5;
                    // 到达右侧边界后停止
                } else if (threeInitial == 250) {
                    // 设置方向为0表示停止
                    threeDire = 0;
                }
                //设置动画旋转
                if (threeDotation < 0) {
                    threeDotation++;
                }
            }
            // 更新图片样式
            photoThree.style.left = threeInitial + "px";
            // 更新旋转角度
            photoThree.style.transform = 'rotate(' + threeDotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (threeDire != 0) {
                window.requestAnimationFrame(threeLavelyChange);
            } else if (threeDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                threeArrayAnJudg = 1;
                // 将抽出的执行条件复位
                threeDire = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                threeInitial = 200;
                // 将角度也复位
                threeDotation = -10;
            }
        }
        // 值为1的时候放回图片
        else if (threeArrayAnJudg == 1) {

            if (threeDirectionBack == 1) {
                // 向左返回
                if (threeInitialBack > 100) {
                    // 每次移动像素
                    threeInitialBack -= 5;
                } else if (threeInitialBack == 100) {
                    // 二段返回动画
                    threeDirectionBack = -1;
                    // 将图层放到后面
                    photoThree.style.zIndex = 0;
                }
                //设置动画旋转
                if (threeRotationBack > -20) {
                    threeRotationBack--;
                }
            } else if (threeDirectionBack == -1) {
                // 向右返回动画
                if (threeInitialBack < 200) {
                    threeInitialBack += 5;
                } else if (threeInitialBack == 200) {
                    // 停止动画
                    threeDirectionBack = 0;
                }
                //设置动画旋转
                if (threeRotationBack < -10) {
                    threeRotationBack++;
                }
            }
            // 更新图片样式
            photoThree.style.left = threeInitialBack + "px";
            // 更新角度样式
            photoThree.style.transform = 'rotate(' + threeRotationBack + 'deg)';
            // 判断角度的执行条件
            if (threeDirectionBack != 0) {
                window.requestAnimationFrame(threeLavelyChange);
            } else if (threeDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                threeArrayAnJudg = null;
                // 复位执行条件,已被下次执行
                threeDirectionBack = 1;
                // 将参数设置为本动画的执行条件,做好复位
                threeInitialBack = 250;
                // 旋转角度也一样
                threeRotationBack = 0;
            }
        }
    }
    //相册第四张图片点击事件
    photoFour.onclick = function fourLavelyChange() {
        //当值为null的时候抽出图片
        if (fourArrayAnJudg == null) {
            // 根据方向和初始位置更新图片位置
            if (fourDire == 1) {
                // 向左移动
                if (fourInitial > 100) {
                    // 每一帧减5个像素
                    fourInitial -= 5;
                } else if (fourInitial == 100) {
                    // 到达左侧边界，改变方向
                    fourDire = -1;
                    layer = layer + 1;
                    // 将图片放在最上面
                    photoFour.style.zIndex = layer;
                }
                //设置动画旋转
                if (fourDotation > -20) {
                    // 逆时针旋转20度
                    fourDotation--;
                }
                // 到达左侧边界后向右移动
            } else if (fourDire == -1) {
                // 向右移动到250
                if (fourInitial < 250) {
                    // 每一帧加5个像素
                    fourInitial += 5;
                    // 到达右侧边界后停止
                } else if (fourInitial == 250) {
                    // 设置方向为0表示停止
                    fourDire = 0;
                }
                //设置动画旋转
                if (fourDotation < 0) {
                    fourDotation++;
                }
            }
            // 更新图片样式
            photoFour.style.left = fourInitial + "px";
            // 更新旋转角度
            photoFour.style.transform = 'rotate(' + fourDotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (fourDire != 0) {
                window.requestAnimationFrame(fourLavelyChange);
            } else if (fourDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                fourArrayAnJudg = 1;
                // 将抽出的执行条件复位
                fourDire = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                fourInitial = 300;
                // 将角度也复位
                fourDotation = -10;
            }
        }
        // 值为1的时候放回图片
        else if (fourArrayAnJudg == 1) {

            if (fourDirectionBack == 1) {
                // 向左返回
                if (fourInitialBack > 100) {
                    // 每次移动像素
                    fourInitialBack -= 5;
                } else if (fourInitialBack == 100) {
                    // 二段返回动画
                    fourDirectionBack = -1;
                    // 将图层放到后面
                    photoFour.style.zIndex = 0;
                }
                //设置动画旋转
                if (fourRotationBack > -20) {
                    fourRotationBack--;
                }
            } else if (fourDirectionBack == -1) {
                // 向右返回动画
                if (fourInitialBack < 300) {
                    fourInitialBack += 5;
                } else if (fourInitialBack == 300) {
                    // 停止动画
                    fourDirectionBack = 0;
                }
                //设置动画旋转
                if (fourRotationBack < -10) {
                    fourRotationBack++;
                }
            }
            // 更新图片样式
            photoFour.style.left = fourInitialBack + "px";
            // 更新角度样式
            photoFour.style.transform = 'rotate(' + fourRotationBack + 'deg)';
            // 判断角度的执行条件
            if (fourDirectionBack != 0) {
                window.requestAnimationFrame(fourLavelyChange);
            } else if (fourDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                fourArrayAnJudg = null;
                // 复位执行条件,已被下次执行
                fourDirectionBack = 1;
                // 将参数设置为本动画的执行条件,做好复位
                fourInitialBack = 250;
                // 旋转角度也一样
                fourRotationBack = 0;
            }
        }
    }
    //相册第五张图片点击事件
    photoFive.onclick = function fiveLavelyChange() {
        //当值为null的时候抽出图片
        if (fiveArrayAnJudg == null) {
            // 根据方向和初始位置更新图片位置
            if (fiveDire == 1) {
                // 向左移动
                if (fiveInitial > 150) {
                    // 每一帧减5个像素
                    fiveInitial -= 5;
                } else if (fiveInitial == 150) {
                    // 到达左侧边界，改变方向
                    fiveDire = -1;
                    layer = layer + 1;
                    // 将图片放在最上面
                    photoFive.style.zIndex = layer;
                }
                //设置动画旋转
                if (fiveDotation > -20) {
                    // 逆时针旋转20度
                    fiveDotation--;
                }
                // 到达左侧边界后向右移动
            } else if (fiveDire == -1) {
                // 向右移动到250
                if (fiveInitial < 250) {
                    // 每一帧加5个像素
                    fiveInitial += 5;
                    // 到达右侧边界后停止
                } else if (fiveInitial == 250) {
                    // 设置方向为0表示停止
                    fiveDire = 0;
                }
                //设置动画旋转
                if (fiveDotation < 0) {
                    fiveDotation++;
                }
            }
            // 更新图片样式
            photoFive.style.left = fiveInitial + "px";
            // 更新旋转角度
            photoFive.style.transform = 'rotate(' + fiveDotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (fiveDire != 0) {
                window.requestAnimationFrame(fiveLavelyChange);
            } else if (fiveDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                fiveArrayAnJudg = 1;
                // 将抽出的执行条件复位
                fiveDire = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                fiveInitial = 400;
                // 将角度也复位
                fiveDotation = -10;
            }
        }
        // 值为1的时候放回图片
        else if (fiveArrayAnJudg == 1) {

            if (fiveDirectionBack == 1) {
                // 向左返回
                if (fiveInitialBack > 150) {
                    // 每次移动像素
                    fiveInitialBack -= 5;
                } else if (fiveInitialBack == 150) {
                    // 二段返回动画
                    fiveDirectionBack = -1;
                    // 将图层放到后面
                    photoFive.style.zIndex = 0;
                }
                //设置动画旋转
                if (fiveRotationBack > -20) {
                    fiveRotationBack--;
                }
            } else if (fiveDirectionBack == -1) {
                // 向右返回动画
                if (fiveInitialBack < 400) {
                    fiveInitialBack += 5;
                } else if (fiveInitialBack == 400) {
                    // 停止动画
                    fiveDirectionBack = 0;
                }
                //设置动画旋转
                if (fiveRotationBack < -10) {
                    fiveRotationBack++;
                }
            }
            // 更新图片样式
            photoFive.style.left = fiveInitialBack + "px";
            // 更新角度样式
            photoFive.style.transform = 'rotate(' + fiveRotationBack + 'deg)';
            // 判断角度的执行条件
            if (fiveDirectionBack != 0) {
                window.requestAnimationFrame(fiveLavelyChange);
            } else if (fiveDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                fiveArrayAnJudg = null;
                // 复位执行条件,已被下次执行
                fiveDirectionBack = 1;
                // 将参数设置为本动画的执行条件,做好复位
                fiveInitialBack = 250;
                // 旋转角度也一样
                fiveRotationBack = 0;
            }
        }
    }
    //相册第六张图片点击事件
    photoSix.onclick = function sixLavelyChange() {
        //当值为null的时候抽出图片
        if (sixArrayAnJudg == null) {
            // 向左移动
            if (sixInitial > 250) {
                // 每一帧减5个像素
                sixInitial -= 5;
            } else if (sixInitial == 250) {
                sixDire = 0;
            }
            //设置动画旋转
            if (sixDotation < 0) {
                // 顺时针旋转
                sixDotation++;
            }
            layer = layer + 1;
            // 将图片放在最上面
            photoSix.style.zIndex = layer;
            // 更新图片样式
            photoSix.style.left = sixInitial + "px";
            // 更新旋转角度
            photoSix.style.transform = 'rotate(' + sixDotation + 'deg)';
            // 判断动画的执行条件
            // 当动画执行到定点的时候退出动画执行
            if (sixDire != 0) {
                window.requestAnimationFrame(sixLavelyChange);
            } else if (sixDire == 0) {
                // 动画执行完毕后更新动画下次执行条件
                // 动画抽出动画执行完毕，将参数调整为执行放回判断条件
                sixArrayAnJudg = 1;
                // 将参数设置为初始参数,下次执行时将为初始位置
                sixInitial = 500;
                // 将角度也复位
                sixDotation = -10;
                // 更新动画执行的判断条件
                sixDire = 1;
            }
        }
        // 值为1的时候放回图片
        else if (sixArrayAnJudg == 1) {
            // 向右返回动画
            if (sixInitialBack < 500) {
                sixInitialBack += 5;
            } else if (sixInitialBack == 500) {
                // 停止动画
                sixDirectionBack = 0;
            }
            //设置动画旋转
            if (sixRotationBack > -10) {
                sixRotationBack--;
            }
            // 更新图片样式
            photoSix.style.left = sixInitialBack + "px";
            // 更新角度样式
            photoSix.style.transform = 'rotate(' + sixRotationBack + 'deg)';
            // 判断角度的执行条件
            if (sixDirectionBack != 0) {
                window.requestAnimationFrame(sixLavelyChange);
            } else if (sixDirectionBack == 0) {
                // 动画执行完毕之后更新下次执行动画条件
                // 将条件设置为抽出动画
                sixArrayAnJudg = null;
                // 将参数设置为本动画的执行条件,做好复位
                sixInitialBack = 250;
                // 旋转角度也一样
                sixRotationBack = 0;
                // 更新动画执行的判断条件
                sixDirectionBack = 1;
            }
        }
    }
}
