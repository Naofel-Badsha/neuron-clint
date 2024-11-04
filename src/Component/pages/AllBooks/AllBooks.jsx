
import Bookcard from '../../ShareComponent/Bookcard/Bookcard';

const AllBooks = () => {
    
    return (
        <div>
        <div className="">
        <div className="mt-14 mb-6">
            <h2 className="text-center text-5xl font-bold">আমাদের কোর্সসমূহ</h2>
        </div>
             </div>
             <div className=" max-w-screen-xl mx-auto  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-2">

                <Bookcard></Bookcard>
               
                <Bookcard></Bookcard>
               
                <Bookcard></Bookcard>
                <Bookcard></Bookcard>
                <Bookcard></Bookcard>
                <Bookcard></Bookcard>
               

             
   

        </div>
    </div>
    );
};

export default AllBooks;