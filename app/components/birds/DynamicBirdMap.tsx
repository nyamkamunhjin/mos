'use client';

import dynamic from 'next/dynamic';

const BirdMapInner = dynamic(() => import('@/app/components/birds/BirdMap'), { ssr: false });

export default BirdMapInner;
