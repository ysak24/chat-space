chat-space
==========

## Database Design
### usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|INTEGER|index: true, primary_key: true, null:false|
|name|VARCHAR|index: true, unique: true,null:false|
|email|VARCHAR|null: false|
|password|VARCHAR|null:false|

#### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members


### messagesテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|INTEGER|index: true, primary_key: true, null:false|
|text|VARCHAR|null: false|
|image|VARCHAR||
|user_id|INTEGER|null: false, foreign_key: true|
|group_id|INTEGER|null: false, foreign_key: true|
|post_at|DATETIME|null: false|

#### Association
- belongs_to :user
- belongs_to :group


### groupsテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|INTEGER|index: true, primary_key: true, null:false|
|title|VARCHAR|null: false|

#### Association
- has_many: users, through: members
- has_many: messages
- has_many: members


### membersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|id|INTEGER|index: true, primary_key: true, null:false|
|user_id|INTEGER|null: false, foreign_key: true|
|group_id|INTEGER|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user
