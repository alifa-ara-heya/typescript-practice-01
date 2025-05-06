{
  // interface generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Ayesha",
    computer: {
      brand: "ASUS",
      model: "X-245ud",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "emilab",
      model: "k2hhe",
      display: "Oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "rich dev",
    computer: {
      brand: "HP",
      model: "X-245ud",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "apple",
      model: "k2hhe",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
