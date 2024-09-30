'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Context } from '../context/context';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReactCalendar = () => {

  const context = useContext(Context)

  const [value, onChange] = useState<Value>(new Date());

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString('en-US') : 'No date selected';
  };

  const displayDate = () => {
    if (Array.isArray(value)) {
      return `From: ${formatDate(value[0])} To: ${formatDate(value[1])}`;
    }
    context?.setDate(`Date: ${formatDate(value)}`)
    return context?.date;
  }
  

  return (
    <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-normal md:justify-around gap-7 md:gap-0 mb-14 sm:mb-20'>
      <Calendar onChange={onChange} value={value} />

      <div className="flex flex-col gap-3">
        <p className="">{displayDate()}</p>
        <p className="">Time- {context?.time}</p>

        <div className="grid grid-cols-2 mt-6 md:mt-10 gap-x-2 gap-y-2">

          <div onClick={()=>context?.setTime("10:00 AM")} className="bg-gray-200 px-4 py-2 hover:bg-gray-400">10:00 AM</div>
          <div onClick={()=>context?.setTime("12:00 PM")} className="bg-gray-200 px-4 py-2 hover:bg-gray-400">12:00 PM</div>
          <div onClick={()=>context?.setTime("02:00 PM")} className="bg-gray-200 px-4 py-2 hover:bg-gray-400">02:00 PM</div>
          <div onClick={()=>context?.setTime("04:00 PM")} className="bg-gray-200 px-4 py-2 hover:bg-gray-400">04:00 PM</div>

        </div>

        <Link href={''}><div className='bg-[#1087ff] px-4 py-2 text-white text-center' onClick={()=>context?.addToCart()}>
          Add to Cart</div></Link>

      </div>
    </div>
  );
}

export default ReactCalendar