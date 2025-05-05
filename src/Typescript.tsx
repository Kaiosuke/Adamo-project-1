/* eslint-disable @typescript-eslint/no-unused-vars */
// const fnTest = (): number => {
//   return 1
// }

// const fnTest = (a: number, b: string): void => {}

// interface IUser {
//   name: string | number
//   age: number
// }

// type TName = string | undefined | null

// type IUser2 = Omit<TName, "name">
// type IUser2 = Pick<TName, "name">
// type IUser2 = Partial<IUser>
// type IUser2 = Required<IUser>
// type IUser2 = Readonly<IUser>
// type IUser2 = Record<TName, string | number>
// type TSymbol = Exclude<TName, 'z'>
// type TSymbol = Extract<TName, 'a' | 'b' | 'd'>
// type TSymbol = NonNullable<TName>
// type TSymbol = ReturnType<typeof fnTest>
// type TSymbol = Parameters<typeof fnTest>

// interface User {
//   name: string
// }

// interface User2 extends User {
//   age: number
// }

// type User2 = User & { age: number }

// type Letter = 'a' | 'b' | 'c'

// type Remove<TType> = TType extends 'c' | 'b' ? never : TType

// type TypeC = Remove<Letter>

type TIConSize2<T extends string> = T | Omit<string, T>

type TIConSize = TIConSize2<'sm' | 'xs'>

interface Props {
  size: TIConSize
}

const IconCom = (_prop: Props) => {
  return <></>
}

const Typescript = () => {
  return (
    <>
      <div>Typescript</div>
      <IconCom size="lg" />
    </>
  )
}

export default Typescript
