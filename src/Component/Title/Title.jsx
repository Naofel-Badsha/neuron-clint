import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Title = () => {
  const [text] = useTypewriter({
    words: ["নিউরনে আপনাকে স্বাগতম!", "আমাদের পাঠ্যক্রম এবং কোর্সসমূহ ঘুরে দেখুন", "আপনার নার্সিং ভর্তি সমস্যা সমাধানে সাহায্য করতে আমরা আছি আপনার পাশে  " , "নিউরনে যোগ দিন এবং নিজেকে সাক্ষর করুন সফলতার পথে!"],
    loop: 0, 
    typeSpeed: 70, 
    deleteSpeed: 50,
    delaySpeed: 1000, 
  });

  return (
    <div className='flex justify-center mt-5 mb-4'>
      <h1 className='text-3xl font-bold p-1'>
        {text}
        <Cursor />
      </h1>
    </div>
  );
};

export default Title;
