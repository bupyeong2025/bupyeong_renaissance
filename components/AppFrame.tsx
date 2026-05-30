"use client";

import { usePathname } from "next/navigation";

/**
 * 사용자용 화면을 모바일 폭으로 가운데 고정하는 프레임.
 * PC에서 열어도 폰 화면처럼 좁게 가운데 정렬되고 양옆은 배경이 보인다.
 * 관리자(/admin)는 데스크탑 와이드 레이아웃이므로 프레임을 적용하지 않는다.
 */
export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto w-full max-w-[480px] min-h-screen bg-white shadow-xl relative overflow-x-hidden">
      {children}
    </div>
  );
}
