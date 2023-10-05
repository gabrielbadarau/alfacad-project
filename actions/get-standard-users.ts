import { clerkClient } from '@clerk/nextjs';

export const getStandardUsers = async () => {
  const standardUsers = await clerkClient.users.getUserList();

  return standardUsers
    .filter((user) => user.privateMetadata.standardUser)
    .map((user) => ({
      emailAddress: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id,
      imageUrl: user.imageUrl,
    }));
};
