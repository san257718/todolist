module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    require ( "@tailwindcss/forms" ) ( { 
      strategy : 'base' ,  // 只生成全局樣式
      strategy : 'class' ,  // 只生成類
    } ) , 
  ],
}
