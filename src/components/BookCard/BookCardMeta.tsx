interface Props {
  author: string;
  releasedDate: number;
}

const BookCardMeta = ({ author, releasedDate }: Props) => (
  <div className="grid grid-rows-1 grid-cols-2 text-center mt-1 mb-3 gap-4">
    <div className='bg-neutral-700 text-white rounded-xl p-1'>
      <h2 className='font-semibold text-2xl'>Author</h2>
      <p>{author}</p>
    </div>
    <div className='bg-neutral-700 text-white rounded-xl p-1'>
      <h2 className='font-semibold text-xl'>Released Date</h2>
      <p>{releasedDate}</p>
    </div>
  </div>
);

export default BookCardMeta;
