  import React, { useState } from 'react';
  import TextArea from './TextArea';
  import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

  function BlogDashBoard() {
    const [blogTitle, setBlogTitle] = useState(localStorage.getItem('blogTitle'));
    const [blogContent, setBlogContent] = useState(localStorage.getItem('blogContent'));
    const [buttonState, setButtonState] = useState('POST BLOG');
    const [worningTitleClasses, setWorningTitleClasses] = useState('')
    const [worningContentClasses, setWorningContentClasses] = useState('')

    const blogTitleHandler = (ele) => {
      localStorage.setItem('blogTitle', ele.target.value);
      setBlogTitle(ele.target.value);
    }

    const saveBlog = () => {
      const blogContent = localStorage.getItem('blogContent');
      if ((blogContent != '' && blogContent != undefined) && (blogTitle != '' && blogTitle != undefined)) {
        setButtonState('SENDING...');
        
        new Promise((resolve, reject) => {
          const content = [];
          var currentText = '';
          var currentKey = '\n';

          for (var index = 0; index < blogContent.length; index++) {
            const c = blogContent[index];
            if (c == '#' || c == '>' || c == '\n') {
              switch (currentKey) {
                case '#':
                  if (currentText != '') content.push({ type: 'h1', content: currentText });
                  break;

                case '>':
                  if (currentText != '') content.push({ type: 'quote', content: currentText });
                  break;

                case '\n':
                  if (currentText != '') content.push({ type: 'p', content: currentText });
                  break;
              }

              currentText = '';
              currentKey = c;
            } else currentText += c;
          }

          switch (currentKey) {
            case '#':
              content.push({ type: 'h1', content: currentText });
              break;

            case '>':
              content.push({ type: 'quote', content: currentText });
              break;

            case '\n':
              content.push({ type: 'p', content: currentText });
              break;
          }

          console.log(blogTitle);
          console.log(blogContent);
          console.log(content);
          localStorage.removeItem('blogContent');
          localStorage.removeItem('blogTitle');
          setBlogContent('');
          setBlogTitle('');
          setWorningTitleClasses('');
          setWorningContentClasses('');
          setButtonState('POST BLOG');
        });
      }else{
        if (blogContent == '' || blogContent == undefined) setWorningContentClasses('bg-red-200 border-red-800');
        else setWorningContentClasses('');
        if (blogTitle == '' || blogTitle == undefined) setWorningTitleClasses('bg-red-200 border-red-800');
        else setWorningTitleClasses('')
      }
    }

    return (
      <div className='py-[73.5px] flex justify-center items-center flex-col gap-4'>
        <h1 className='text-6xl font-bold py-10 text-center max-[400px]:text-4xl'>Create new blog</h1>
        <input type='text' value={blogTitle} onChange={blogTitleHandler} className={`transition-all w-[90%] max-w-[1400px] border border-[#02c2ab] rounded-md h-14 max-[400px]:h-10 focus:outline-none box-border p-5 text-2xl max-[400px]:text-lg placeholder:text-[#02c2ab]/60 ${worningTitleClasses}`} placeholder='Blog Title' />
        <TextArea blogContent={blogContent} setBlogContent={setBlogContent} worningClasses={worningContentClasses} />
        <PrimaryButton title={buttonState} classes='min-[500px]:self-end max-[500px]:w-[90%] mr-[5%]' onCLick={saveBlog} />
      </div>
    )
  }

  export default BlogDashBoard
