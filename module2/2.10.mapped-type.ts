{
  // mapped type

  const arrayOfNumbers: number[] = [1, 2, 4];
  const arrayOfStrings: string[] = ["1", "2", "4"];
  const arrayOfMappedStrings: string[] = arrayOfNumbers.map((num) =>
    num.toString()
  );
  console.log(arrayOfMappedStrings); // '1', '2', '4' ]

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //lookup type

  type AreaStringMapped = {
    [key in "height" | "width" | "depth"]: string;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
