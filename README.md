chat-space
==========

## Database Design
### usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|integer|index: true, primary_key: true, null: false|
|name|string|index: true, unique: true,null: false|
|email|string|null: false|
|password|string|null: false|

#### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members


### messagesテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|integer|index: true, primary_key: true, null: false|
|text|text|null: false|
|image|string||
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

#### Association
- belongs_to :user
- belongs_to :group


### groupsテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|integer|index: true, primary_key: true, null: false|
|title|string|null: false|

#### Association
- has_many: users, through: members
- has_many: messages
- has_many: members


### membersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|integer|index: true, primary_key: true, null: false|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user
