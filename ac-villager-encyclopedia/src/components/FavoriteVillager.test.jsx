
import React from 'react';
// React Testing Library에서 필요한 함수들을 불러옵니다.
import { render, screen } from '@testing-library/react';

// Vitest에서 테스트 정의에 필요한 함수들을 불러옵니다.
import { describe, it, expect, beforeEach } from 'vitest';

// 우리가 테스트할 관심 주민 목록 컴포넌트를 불러옵니다.
import FavoriteVillagerList from './FavoriteVillagerList';

// Zustand 전역 상태에서 favorites 배열을 직접 조작하기 위해 가져옵니다.
import { useVillagerStore } from '../store/useVillagerStore';

// 각 테스트 실행 전, 상태를 초기화하여 테스트 간 영향을 방지합니다.
beforeEach(() => {
  useVillagerStore.setState({ favorites: [] });
});

// 관심 주민 기능 관련 테스트 그룹을 시작합니다.
describe('관심 주민 기능', () => {

  // 관심 주민이 아무도 없을 때, 안내 메시지가 잘 뜨는지 확인하는 테스트입니다.
  it('관심 주민이 없을 때 메시지가 보임', () => {
    render(<FavoriteVillagerList />); // 컴포넌트를 렌더링합니다.
    expect(
      screen.getByText('관심주민이 없습니다.') // 특정 텍스트가 있는지 확인
    ).toBeInTheDocument(); // 화면에 존재해야 테스트 성공
  });

  // 관심 주민이 있을 때, 해당 주민의 이름과 이미지가 화면에 뜨는지 확인하는 테스트입니다.
  it('관심 주민이 있을 때 이름과 이미지가 표시됨', () => {
    // 전역 상태(favorites 배열)에 테스트용 주민 데이터를 직접 삽입합니다.
    useVillagerStore.setState({
      favorites: [
        { name: 'Raymond', img: 'https://image.url' } // 가상의 주민 객체
      ],
    });

    render(<FavoriteVillagerList />); // 컴포넌트를 다시 렌더링합니다.

    // 주민 이름이 표시되는지 확인
    expect(screen.getByText('Raymond')).toBeInTheDocument();

    // 이미지가 표시되는지 (alt 속성 기준) 확인
    expect(screen.getByAltText('Raymond')).toBeInTheDocument();
  });
});