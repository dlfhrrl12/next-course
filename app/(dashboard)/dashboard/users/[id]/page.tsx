import React from "react";

const UserDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>UserPropile: {id}</div>;
};

export default UserDetailPage;
