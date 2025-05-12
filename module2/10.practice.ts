{
  /* 
    Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined. */

  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  const displayName = getDisplayName("Ayesha");
  const displayName2 = getDisplayName(undefined);
  const displayName3 = getDisplayName(null);
  console.log(displayName);
  console.log(displayName2);
  console.log(displayName3);
}
