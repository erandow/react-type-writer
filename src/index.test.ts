import { useTypeWriter } from './'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useMyHook', () => {
  it('updates every second', () => {
    const result = renderHook(() => useTypeWriter({
      text: ["Developer.", "Programmer.", "A slave."],
      delay: 1000,
      blinkerDelay: 500,
      infiniteLoop: true,
    }));

    expect(result).toBe("D");

    // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result).toBe("De");
  })
})
