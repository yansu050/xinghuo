// 移动菜单切换
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // 关闭移动菜单
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(5px)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'var(--white-color)';
        navbar.style.backdropFilter = 'none';
    }
});

// 轮播图功能
const testimonialItems = document.querySelectorAll('.testimonial-item');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    // 隐藏所有幻灯片
    testimonialItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 移除所有激活的 dots
    sliderDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // 显示当前幻灯片和激活当前 dot
    testimonialItems[index].classList.add('active');
    sliderDots[index].classList.add('active');
    currentSlide = index;
}

// 初始化显示第一张幻灯片
showSlide(0);

// 点击 dots 切换幻灯片
sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});

// 自动轮播
setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(nextSlide);
}, 5000);

// 表单提交处理
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        organization: document.getElementById('organization').value,
        activity: document.getElementById('activity').value,
        message: document.getElementById('message').value
    };
    
    // 模拟表单提交
    console.log('表单提交数据:', formData);
    
    // 显示提交成功消息
    alert('预约信息已提交成功，我们将尽快与您联系！');
    
    // 重置表单
    bookingForm.reset();
});

// 滚动动画
function checkFade() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 初始化元素状态
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// 页面加载和滚动时检查元素是否进入视口
window.addEventListener('load', checkFade);
window.addEventListener('scroll', checkFade);