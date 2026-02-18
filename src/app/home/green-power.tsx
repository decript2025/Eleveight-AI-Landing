import Image from 'next/image';


export function GreenPower() {
  return (
    <div className="bg-[url(public/home/green-power.jpg)] h-[380px] bg-[80%_50%] [background-size:cover] bg-no-repeat rounded-[16px] m-6 relative">
        <div className="absolute bottom-4 left-4 p-4 w-[calc(100%-32px)] border m-auto flex justify-center items-center flex-col gap-2 text-foreground">
          <Image src="/home/leaf.svg" alt="leaf" width={30} height={38} />
          <p className="font-bold">100% Green Power. Tier III Resilience.</p>
          <p className="flex flex-col justify-center items-center font-normal text-[14px]/[20px]">
            <span>
              100% green power as the baseline, not an option.
            </span>
            <span>
              Tier III–aligned redundancy and backup power keep performance stable through grid events. PUE is available online for full operational transparency.
            </span>
          </p>
        </div>
    </div>
  );
}