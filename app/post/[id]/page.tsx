type Props = {
  params: {
    id: string;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <>ID: {params.id} Page</>;
};

export default PostDetailPage;
