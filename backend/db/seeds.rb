# seeds.rb
User.create!(name: 'test1', email: 'test@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test2', email: 'test2@example.com', password: 'password', password_confirmation: 'password')

user1 = User.find(1)
post1 = Post.create!(name: 'ニャア', neko_type: 'アメリカンショートヘア', user: user1)
DetailInfo.create!(post: post1, favorite_food: '魚', favorite_toy: '猫じゃらし')

post2 = Post.create!(name: 'まる', neko_type: 'スコッティシュフォールド', user: user1)
DetailInfo.create!(post: post2, favorite_food: '野菜', favorite_toy: 'まりたん')

user2 = User.find(2)
post3 = Post.create!(name: 'むぎ', neko_type: 'スコッティシュフォールド', user: user2)
DetailInfo.create!(post: post3, favorite_food: '肉', favorite_toy: 'ダンボール')

post4 = Post.create!(name: 'ばに', neko_type: 'エキゾチックショートヘア', user: user2)
DetailInfo.create!(post: post4, favorite_food: '豆', favorite_toy: 'キャットタワー')